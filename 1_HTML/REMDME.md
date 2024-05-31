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
<img src="/" width="100" />
```

3. 하나의 속성에는 값을 한개만 지정 가능하다

```html
<img src="/" width="100, 200" />
<!-- 작성 불가 -->
```

4.속성값은 원래 이름이 한글이 아닌 경우엔 사용 불가다.

```html
<img src="/" width="삼백" />
<!-- 작성 불가-->
<meta name="keywords" content="영화, 한국영화, 외국영화" />
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
<meta charset="UTF-8" />
<!--문자 세트 지정 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<!-- 모바일 기기 -->
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<!-- 인터넷 익스플로러 브라우저 -->

<!-- 검색 엔진 -->
<meta name="keyowords" content="키워드1, 키워드2" />
<meta name="discription" content="문서 설명" />
<meta name="author" content="문서 작성자" />
```

##팁

- 프로그램 짤 때 ! 바로 누르면 기본 세팅 됨

# 폼 태그

## 입력 양식

- 사용자가 페이지에 값을 전달하는 모든 형식

## form

1. 모든 양식은 `<form> ~ </form>` 안에서 작성
2. 모든 양식은 이름(name) 입력 : 서버로 전송된 값들을 구분하기 위한 키값으로 사용
3. 대부분의 양식은 `<input>` 태그의 "type" 속성으로 정의
4. `<select>` : 콤보 상자 작성
5. `<textarea>` : 텍스트 여러 줄 입력하는 상자
6. `<button>` : 버튼 형식의 요소 작성

### form 태그 속성

- action : 데이터를 전달할 서버를 지정
- method : 데이터 전송 방식을 지정
- name : form 태그의 이름을 지정

### 전송 방식 : get, post

- get
  - 데이터를 URL에 노출시켜서 서버에 전달한다.
  - 데이터의 안전성이 낮다.
  - 데이터를 불러올 때 사용한다.
- post

  - 데이터를 보낼 때 사용한다.

## input

- 사용자로부터 데이터를 입력 받기 위한 태그
- 속성 type의 값에 따라서 input이 변형된다.

1. **text** : 한 줄의 텍스트를 입력받을 수 있다.
2. **password** : 비밀번호를 입력받을 수 있다.
3. **checkbox** : 여러 항목 중 여러 가지를 선택할 수 있다.
4. **radio** : 여러 항목 중 한 가지만 선택할 수 있다.
5. **file** : 파일을 첨부할 수 있다.
6. hidden : 정보를 가지고 있어야 하지만 사용자에게 안 보이게 할 때 사용한다.
7. **submit** : 데이터를 전송할 때 사용하는 버튼이다.
8. reset : form 태그 내에서 입력한 값을 모두 초기화한다.
9. **button** : 기본적으로 가진 기능이 없어 다른 기능과 연결해서 사용한다. (자바스크립트랑 같이)
10. datetime-local : 년/월/일/시/분/초에 대한 데이터를 입력받을 수 있다.
11. week : 주에 대한 데이터를 입력받을 수 있다.
12. month : 년/월에 대한 데이터를 입력받을 수 있다.
13. **date** : 년/월/일에 대한 데이터를 입력받을 수 있다.
14. time : 시간에 대한 데이터를 입력받을 수 있다.
15. email : 이메일 주소를 입력받을 수 있다. (입력받은 값이 email 주소 형식이 맞는지 체크해 준다.)
16. url : URL을 입력받을 수 있다.
17. search : 검색 값을 입력받을 수 있다.
18. color : 색상을 선택할 수 있다.
19. number : 숫자만 입력을 받을 수 있다.
20. range : 슬라이드바를 통해 숫자를 입력받을 수 있다.
21. tel : 전화번호를 입력받을 수 있다. (모바일에서는 키보드 배열이 전화번호를 입력받는 창이 뜬다.)

## input 기본 속성
- placeholder : 텍스트 입력에 도움이 되는 힌트 표시
- autofocus : 마우스 커서 바로 표시
- required : 필수로 입력해야 되는 태그에 사용
- readonly : 읽기 전용