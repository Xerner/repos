# Examples

This script is an example of how to initialize a repo with my web-apps manifest

```bash
repo init -u https://github.com/Xerner/manifests -b development -m web-apps.default.xml
```

This is how to sync all branches to their development commits
```bash
repo forall -c git checkout development
```
