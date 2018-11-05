#빌드할때마다 두번 입력하기 번거러워 만듬
# rr a :  Vue 빌드 & Run
# rr i :  Vue 빌드 & Run

# 1.vue 빌드.
# 2.모바일 빌드.

npm run build


if [ "$1" = "a" ];then
echo "android Build"
cordova run android


elif [ "$1" = "i" ]; then
 echo "IOS Build"
 cordova run ios

else
  cordova run android


fi




 



