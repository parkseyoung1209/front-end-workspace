## HTML
웹브라우저란? 인터넷 화면을 보여주는 프로그램
EX)크롬, 파이어폭스 등등
사용자가 쓰는 브라우저는 고정되어 있지 않다.
브라우저마다 화면에 다르게 출력될 수 있으니 각각 다른 브라우저마다 테스트를 하며 수정=>크로스 브라우징

## 웹 페이지 개발 방법에 대해..
구조(structure) : HTML(Hyper Text Markup Language)
표현(Presentation) : CSS
동작(Behavior) :JavaScript

## HTML(Hyper Text Markup Language)
웹 문서 / HTML 문서 / HTML 페이지

## 웹 페이지 생성

-확장자는 .html 또는 .htm
처음 보여지는 화면의 파일 이름은 index.html

## main page, sub page
-main page는 index.html로 표현
-sub page는 index를 제외한 나머지'.html' 파일들

## 태그

```
<태그명></태그명>(전자는 시작태그, 후자는 종료태그)
```

## 작성법
1. "<"와 ">" 사이에 명령어(tag 또는 element) 작성
2. 태그는 시작 태그와 종료 태그로 구성이 된다.
3. 종료 태그가 없는 케이스들이 존재하는데(img, br, hr, input ,meta)가 있다
4. 태그는 중첩 사용이 가능하며, 종료 태그는 후에 쓴 태그를 먼저 쓴다
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분한다.

```html
<a href="#"></a>
```


2. 여러 개의 속성을 사용할 수 있다.

```html
<img src="/" width="100">
```
3. 하나의 속성에는 값을 한개만 지정 가능하다

```html
<img src="/" width="100, 200">
<!-- 작성 불가 -->
```

4.속성값은 원래 이름이 한글이 아닌 경우엔 사용 불가다.

```html
<img src="/" width="삼백">
<!-- 작성 불가-->
<meta name="keywords" content="영화, 한국영화, 외국영화">
<!-- 예외적인 경우 -->
```

## HTML 기본 문서 구조

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

<!-- 개발자간의 약속된 구조 -->
- !DOCTYPE html : 현재 문서가 html5 언어로 작성된 문서라는 뜻.
-html : 웹 문서의 시작과 끝
-head : 웹 문서의 정보
-body : 실제 웹 브라우저에 나타날 내용

## head에 많이 쓰는 태그

1. title : 문서의 제목
2. meta : 문서의 속성

## meta 태그

```html
<meta charset="UTF-8"> <!--문자 세트 지정 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0"> <!-- 모바일 기기 -->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- 인터넷 익스플로러 브라우저 -->

<!-- 검색 엔진 -->
<meta name="keyowords" content="키워드1, 키워드2">
<meta name="discription" content="문서 설명">
<meta name="author" content="문서 작성자">
```

##팁
- 프로그램 짤 때 ! 바로 누르면 기본 세팅 됨