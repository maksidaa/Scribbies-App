# Scribbies iOS release

## Account and identity

- Expo owner: `maksidaa`
- EAS project: `6da06cea-5738-45f1-a11c-8d47d3ee4c6b`
- Project dashboard: https://expo.dev/accounts/maksidaa/projects/scribbies
- Bundle identifier: `com.maksidaa.scribbies`
- Apple team: `3Y49S926NK`
- Marketing version: `2.0.0`
- App Store Connect app: `6808803908`
- TestFlight: https://appstoreconnect.apple.com/apps/6808803908/testflight/ios

Stake Admin's EAS project and App Store Connect app are separate. Never use its app ID for a Scribbies submission. Credentials remain in the existing EAS/Apple credential stores, outside this repository.

## EAS build

Capacitor places its Xcode project under `ios/App/`, while EAS discovers shared schemes directly under `ios/`. The staging command creates an isolated release directory with the native layout EAS expects, adjusts Swift package paths, and supplies a shared App scheme. It does not modify the Capacitor source layout.

```sh
npm ci
npm run release:stage -- /tmp/scribbies-release-YYYYMMDD
cd /tmp/scribbies-release-YYYYMMDD
npx --yes eas-cli@23.2.0 build --platform ios --profile production --auto-submit --no-wait
```

Use a new staging directory each time. The custom EAS workflow runs all checks, builds web assets, refreshes the native asset folder, assigns signing credentials and the remote build number, then archives and exports with Fastlane. It uses Swift Package Manager; it does not run React Native prebuild or CocoaPods.

Scribbies' numeric App Store Connect ID is saved in `submit.production.ios.ascAppId`. The existing team distribution certificate and EAS Submit API key are assigned to this separate app. Once credentials are configured, `--non-interactive` can be added to the build command. EAS manages incrementing build numbers remotely. Do not commit signing keys, provisioning profiles, credentials JSON, or exported IPAs.

## Validation

On September 4, 2026, EAS successfully signed and archived version 2.0.0 (build 3):
https://expo.dev/accounts/maksidaa/projects/scribbies/builds/af55b0a5-3f7f-4cef-96d3-285c46522ecf

Automatic TestFlight delivery was scheduled with the existing EAS Submit key:
https://expo.dev/accounts/maksidaa/projects/scribbies/submissions/1a78e362-d3f1-45d1-8a58-7b672ae4970b

Build 3 was confirmed by App Store Connect as VALID / IN_BETA_TESTING at 23:28 UTC on September 4, 2026. The user has opened this build on an iPhone. It contains the earlier dashboard home.

The first development pass passed 33 automated tests, the production web build, dependency auditing (zero reported vulnerabilities), and an unsigned Xcode simulator compilation. Tests cover creature lifecycle, every adventure encounter, all species being obtainable, rewards being applied once, daily caps, memorization modes and spaced review, save recovery, legacy migration, escaping, and template rendering.

These checks do not establish that the app has been played through on physical devices. Before App Store release, play the complete new-player flow on iPhone and iPad, including the initial egg, practice, hatch, care, collection, backup/restore, app restart, offline launch, sound and accessibility settings. Check VoiceOver, larger text, safe areas, keyboard interactions, and reduced motion. TestFlight submission is separate from App Review approval.

The App Store release also needs final screenshots, description, support and privacy-policy URLs, age/content declarations, and a deliberate decision about the Kids category. Review the included and custom scripture content with the intended audience. The in-game privacy explanation describes current behavior; update it if future services collect or transmit data.

## Pet-first home replacement (build 5)

Source: `9c88a356e4d1bcf725b81fb371be157aa072a39f`. EAS staging snapshot: `6397af7` in `/tmp/scribbies-eas-pet-home-release`.

- Build: https://expo.dev/accounts/maksidaa/projects/scribbies/builds/ddce5711-f513-4b62-8f32-3e77170d33d6
- Automatic submission: https://expo.dev/accounts/maksidaa/projects/scribbies/submissions/f9ec47e1-789d-44ae-8d09-ebb4e540a396
- At 23:29 UTC, the build was in progress. TestFlight availability has not yet been confirmed.

This replacement opens on the saved pet or a first egg, with a compact icon toolbar and large care/learning buttons. It preserves music, voices, current art, and saves. Fifty-one tests pass, including a controller-level first-player loop that reaches hatch and feeding without visiting exploration. This is code-level validation with mocked browser boundaries, not a physical-device playthrough.

Build 4 (audio with the previous home) signed successfully, but its submission was still queued before build 5 started. Use build 5 or newer to review the revised home.
