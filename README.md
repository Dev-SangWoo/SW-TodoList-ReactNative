# React Native Todo 앱

간단하고 직관적인 Todo 리스트 관리 앱입니다. 이 앱은 React Native와 Expo를 활용하여 개발되었습니다.

## 주요 기능

- ✅ 할 일 추가, 완료 표시, 삭제 기능
- 💾 AsyncStorage를 활용한 로컬 데이터 저장
- 🌓 라이트/다크 모드 지원
- 📱 반응형 UI 디자인

## 스크린샷
<img src="https://github.com/user-attachments/assets/b1374f7d-e853-4e63-bdde-6422c69f0569" width="300">
<img src="https://github.com/user-attachments/assets/62b18727-5e99-4be3-bcaf-81623f1965a0" width="300">



## 기술 스택

- React Native
- Expo
- TypeScript
- AsyncStorage
- React Navigation
- Expo Router

## 설치 방법

1. 프로젝트 클론:
```bash
git clone [repository-url]
cd MyExpoApp
```

2. 의존성 설치:
```bash
npm install
```

## 실행 방법

개발 서버 시작:
```bash
npm run start
```

특정 플랫폼에서 실행:
```bash
npm run android  # 안드로이드에서 실행
npm run ios      # iOS에서 실행 (MacOS 필요)
npm run web      # 웹에서 실행
```

## 프로젝트 구조

```
MyExpoApp/
├── app/                   # 앱 화면
│   └── (tabs)/            # 탭 기반 화면
│       ├── index.tsx      # 할 일 목록 메인 화면
│       ├── explore.tsx    # 앱 정보 화면
│       └── _layout.tsx    # 탭 레이아웃 설정
├── components/            # 재사용 가능한 컴포넌트
│   ├── TodoItem.tsx       # 할 일 항목 컴포넌트
│   └── TodoInput.tsx      # 할 일 입력 컴포넌트
├── assets/                # 이미지, 폰트 등 정적 파일
├── constants/             # 앱 상수 (색상, 크기 등)
└── hooks/                 # 커스텀 훅
```

## 주요 컴포넌트 설명

### TodoItem.tsx
개별 할 일 항목을 표시하는 컴포넌트입니다. 체크박스로 완료 상태를 표시하고, 삭제 버튼이 포함되어 있습니다.

### TodoInput.tsx
새로운 할 일을 입력할 수 있는 입력 필드와 추가 버튼이 포함된 컴포넌트입니다.

### 메인 화면 (index.tsx)
할 일 목록을 표시하고 관리하는 메인 화면입니다. AsyncStorage를 사용하여 데이터를 영구적으로 저장합니다.

### 정보 화면 (explore.tsx)
앱에 대한 정보와 주요 기능, 사용 기술을 설명하는 화면입니다.

## 추가 개발 가능한 기능

이 앱은 기본적인 Todo 기능을 제공하지만, 다음과 같은 기능을 추가로 개발할 수 있습니다:

1. **카테고리 분류**: 할 일을 카테고리별로 구분하여 관리
2. **우선순위 설정**: 할 일에 우선순위 부여 기능
3. **마감일 설정**: 할 일에 마감 기한 설정 기능
4. **알림 기능**: 마감일 접근 시 푸시 알림 기능
5. **다중 사용자 지원**: 계정 로그인 및 데이터 동기화 기능
6. **테마 커스터마이징**: 다양한 테마 선택 기능
7. **할 일 검색**: 키워드 기반 할 일 검색 기능
8. **정렬 옵션**: 생성일, 마감일, 우선순위 등에 따른 정렬 기능
9. **공유 기능**: 할 일 목록을 다른 사용자와 공유하는 기능
10. **통계 대시보드**: 완료된 할 일, 남은 할 일 등의 통계 보기

## 문제 해결 방법

### 앱이 데이터를 저장하지 않는 경우
1. AsyncStorage 권한이 올바르게 설정되어 있는지 확인
2. 저장/로드 함수에서 오류가 발생하는지 콘솔 로그 확인

### 앱이 제대로 실행되지 않는 경우
1. 모든 의존성이 설치되어 있는지 확인: `npm install`
2. Expo CLI가 최신 버전인지 확인: `npm install -g expo-cli`
3. 캐시 삭제 후 재시작: `expo start -c`

## 참고 자료

- [React Native 공식 문서](https://reactnative.dev/docs/getting-started)
- [Expo 공식 문서](https://docs.expo.dev/)
- [AsyncStorage 문서](https://react-native-async-storage.github.io/async-storage/docs/usage/)

## 라이센스

MIT

---

이 프로젝트는 React Native 및 Expo 학습 목적으로 개발되었습니다.
