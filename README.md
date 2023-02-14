# Description

An app for cushing's disease.

## Tecnologies

- React 18.2.0
- React Native 0.71.3
- Yarn 1.22.19
- NodeJS v14.21.2
- Npm 9.3.1
- OpenJDK 17.0.5 2022-10-18
- Gradle 7.3.1
- Sonarqube 9.5.XX

## Development

One terminal:

```bash
npm i
npx react-native start --reset-cache
```

Another terminal:

```bash
cd android && ./gradlew clean && cd ../
npx react-native run-android
```

### Developer debug

```bash
cd android && ./gradlew assembleRelease && cd ../
```

## Production

At the root of the project.

```bash
npx react-native run-android --variant=release
```

### APK path

The apk is in android/app/build/outputs/apk/release/

## Quality code

### Sonarqube

- [Site](https://www.sonarqube.org/)

#### Install

##### With docker

```bash
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

##### Web access

```
http://localhost:9100
```

###### Credentials

- User: admin
- Password: admin

#### Use with docker

```bash
docker pull newtmitch/sonar-scanner

```

##### GNU-Linux/MacOS

Execute

```bash
docker run -ti -v /home/proyectosbeta/repositoriosGit/app-cushing:/usr/src --link sonarqube newtmitch/sonar-scanner
```

##### Microsoft Windows

Execute

```bash
docker run -ti -v C:\Users\proyectosbeta\repositoriosGit\app-cushing:/usr/src --link sonarqube newtmitch/sonar-scanner
```