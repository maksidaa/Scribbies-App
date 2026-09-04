# Scribbies iOS release

## Account and identity

- Expo owner: `maksidaa`
- EAS project: `6da06cea-5738-45f1-a11c-8d47d3ee4c6b`
- Project dashboard: https://expo.dev/accounts/maksidaa/projects/scribbies
- Bundle identifier: `com.maksidaa.scribbies`
- Apple team: `3Y49S926NK`
- Marketing version: `2.0.0`

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

After the initial App Store Connect entry is created, retain Scribbies' returned numeric app ID in `submit.production.ios.ascAppId` in the source `eas.json`. EAS manages incrementing build numbers remotely. Do not commit signing keys, provisioning profiles, credentials JSON, or exported IPAs.

## Validation

The first development pass passed 33 automated tests, the production web build, dependency auditing (zero reported vulnerabilities), and an unsigned Xcode simulator compilation. Tests cover creature lifecycle, every adventure encounter, all species being obtainable, rewards being applied once, daily caps, memorization modes and spaced review, save recovery, legacy migration, escaping, and template rendering.

These checks do not establish that the app has been played through on physical devices. Before App Store release, play the complete new-player flow on iPhone and iPad, including egg choice, practice, hatch, care, collection, backup/restore, app restart, offline launch, sound and accessibility settings. Check VoiceOver, larger text, safe areas, keyboard interactions, and reduced motion. TestFlight submission is separate from App Review approval.

The App Store release also needs final screenshots, description, support and privacy-policy URLs, age/content declarations, and a deliberate decision about the Kids category. Review the included and custom scripture content with the intended audience. The in-game privacy explanation describes current behavior; update it if future services collect or transmit data.
