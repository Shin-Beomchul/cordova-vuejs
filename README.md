---
title: SPA With cordova + Vue.js + webpack + Vuetify
date: 2018-11-01 10:54:12
tags:
---
# TL;DR
 - Cordova SPA App의 한계는 초기로딩 속도를 제외하고 WebApp을 넘어설 수 없다.
 - Native WebView App VS Cordova WebView App은 성능상 완전히 동일
 - SPA는 웹으로 다운받는 프로그램(Single Page == 어플리케이션)
 - Cordova + SPA : Single Page를 App이 가지고 있어 초기 로딩 속도가 빠름.
 - SPA web서비스가 있고 App으로의 전환시 타 방법에 비해 가장 쉽다.(ReactNative, Native App)
   단, SPA가 아니라 일반 Page요청 기반의 Web이라면 Controller부분을 App에서 개발 필요
 


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


# +  Vue빌드 & App Install 쉘스크립트 추가.
~~~
sudo sh rr.sh a // android
sudo sh rr.sh i // ios 
~~~
 


# #삽질 꿀팁#

# ignore 대상
: node_modules ==  npm run build
: platforms == 땡겨받고 $ cordovasub platform add {yourFlatform}


# live 서버 :  npm run dev 
이렇게 개발하다가 이제 됐나... 싶으면  
 - Step1. npm run build 
 - Step2. cordova run android 
 
 
 # cordova run ios 가 안된다.
 "ios-deploy was not found. Please download, build and install version 1.9.2 or greater from https://github.com/phonegap/ios-deploy into your path, or do 'npm install -g ios-deploy'"
 
 
 해결 :  https://github.com/ios-control/ios-deploy/issues/346

# cordova (App)에서 mode: history하면 최초 컴포넌트를 불러오지 못한다.
https://www.npmjs.com/package/vue-cli-plugin-cordova

https://forum.quasar-framework.org/topic/726/history-mode-for-web-and-not-for-cordova/11 

#cordova 최초시작 페이지 설정
config/config.xml
  <!--<content src="dist/index.html" />-->

#

출처 
폰트 관련 : https://medium.com/@valeriocapogna/how-to-setup-a-cordova-app-using-vue-js-8ba1315b9666
최초 세팅 관련 : https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b

