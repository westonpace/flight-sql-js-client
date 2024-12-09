set -e

BUMP_MINOR=${1:-false}
HEAD_SHA=${2:-$(git rev-parse HEAD)}

TAG_PREFIX="v"

readonly SELF_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

PREV_TAG=$(git tag --sort='version:refname' | grep ^$TAG_PREFIX | python $SELF_DIR/semver_sort.py $TAG_PREFIX | tail -n 1)
echo "Found previous tag $PREV_TAG"

if [[ "$BUMP_MINOR" != "false" ]]; then
    # X.Y.Z -> X.(Y+1).0-beta.0
    bump-my-version bump -vv --no-tag minor
else
    # X.Y.Z -> X.Y.(Z+1)-beta.0
    bump-my-version bump -vv --no-tag patch
fi

# The above bump will always bump to a pre-release version.
# Now bump the pre-release level ("pre_l") to make it stable.

# X.Y.Z-beta.N -> X.Y.Z
bump-my-version bump -vv pre_l

# Validate that we have incremented version appropriately for breaking changes
NEW_TAG=$(git describe --tags --exact-match HEAD)
NEW_VERSION=$(echo $NEW_TAG | sed "s/^$TAG_PREFIX//")
LAST_STABLE_RELEASE=$(git tag --sort='version:refname' | grep ^$TAG_PREFIX | grep -v beta | grep -vF "$NEW_TAG" | python $SELF_DIR/semver_sort.py $TAG_PREFIX | tail -n 1)
LAST_STABLE_VERSION=$(echo $LAST_STABLE_RELEASE | sed "s/^$TAG_PREFIX//")

echo "Checking for breaking changes between $LAST_STABLE_RELEASE / $LAST_STABLE_VERSION and $HEAD_SHA / $NEW_VERSION"

python $SELF_DIR/check_breaking_changes.py $LAST_STABLE_RELEASE $HEAD_SHA $LAST_STABLE_VERSION $NEW_VERSION
