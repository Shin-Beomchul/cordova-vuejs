---
title: cordova
date: 2018-11-01 10:54:12
tags:
---

# Cordova 패키지 매니져 설치
~~~
 npm install -g cordova
 npm install -g vue-cli
~~~


# 프로젝트 생성
~~~
 cordova create VueApp com.beom.house
 vue init webpack VueApp com.beom.house
 
 
 result : (의미 없음)
 ? Project name todo-mobile-app-cordova-vue
 ? Project description cordova-with-vue
 ? Author Shin BeomChul <sbc0830@osstem.com>
 ? Vue build standalone
 ? Install vue-router? Yes
 ? Use ESLint to lint your code? Yes
 ? Pick an ESLint preset Standard
 ? Set up unit tests Yes
 ? Pick a test runner jest
 ? Setup e2e tests with Nightwatch? Yes
 ? Should we run `npm install` for you after the project has been created? (recommended) npm
 
 running % init ....
~~~


# ./www 삭제
~~~
cd VueApp
sudo rm -r www/*
# Password: ************

~~~
 
 
 
 # {VueApp}/config/index.js  수정

~~~
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../www/dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../www/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
}


~~~

# {VueApp}config.xml 수정
코르도바 실행 시 Vue 빌드 index로 변경.
~~~
<content src=”dist/index.html” />

~~~


# npm Build 
~~~
 npm run build

~~~


#  android SDK 툴 설치

 
 # 플랫폼 추가
  
~~~
{VueApp}/cordova platform add android
{VueApp}/cordova platform add ios
 ...
~~~
1. Android
2. IOS
3. Blackberry
4. OSX
5. WebOS
6. Windows
7. Browser


#  android gradle  CLI 설치 
~~~
https://gradle.org/install/ 참조 
~~~



# Run

~~~
cordova run android
~~~


# 자 이제 수정하고 반영해보자.

 - Step1. Vue.js 수정.
 - Step2. npm run build 
 - Step3. cordova run android 



 


# #삽질 꿀팁#

# ignore 대상
: node_modules ==  npm run build
: platforms == 땡겨받고 $ cordova platform add {yourFlatform}


# live 서버 :  npm run dev 
이렇게 개발하다가 이제 됐나... 싶으면  
 - Step1. npm run build 
 - Step2. cordova run android 
 
 
 # cordova run ios 가 안된다.
 "ios-deploy was not found. Please download, build and install version 1.9.2 or greater from https://github.com/phonegap/ios-deploy into your path, or do 'npm install -g ios-deploy'"
 
 
 해결 :  https://github.com/ios-control/ios-deploy/issues/346




출처 
폰트 관련 : https://medium.com/@valeriocapogna/how-to-setup-a-cordova-app-using-vue-js-8ba1315b9666
최초 세팅 관련 : https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b

