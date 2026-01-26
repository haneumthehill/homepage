# 프로젝트 정리 제안서

## 🔍 분석 결과 요약

프로젝트 전체 구조를 분석한 결과, 다음과 같은 정리 대상 항목들을 발견했습니다.
---

## 🗑️ 2. 미사용 파일 삭제


### 2.2 미사용 이미지 파일
- **파일**: `assets/images/H_LOGO.jpg`
- **이유**: 
  - 모든 HTML 파일과 CSS 파일에서 참조되지 않음
  - 로고는 텍스트로 표시됨 (CSS 확인 결과 `.logo-text` 클래스 사용)
- **조치**: 삭제 또는 `unused_assets/` 폴더로 이동

---

## 📁 3. 존재하지 않는 파일 참조 정리

### 3.1 참조되지만 존재하지 않는 이미지
- **참조 위치**:
  - `index.html`: `./assets/images/about-location.jpg`
  - `index.html`, `history.html`, `news.html`: `./assets/images/cta-background.jpg`
- **이유**: 파일이 실제로 존재하지 않지만 HTML에서 참조됨
- **조치**: 
  - 이미지 파일 추가 또는
  - 참조 제거 (placeholder 표시)
  - 또는 주석 처리

### 3.2 참조되지만 존재하지 않는 아이콘
- **참조 위치**: 모든 HTML 파일 (`./assets/icons/favicon.png`)
- **이유**: `assets/icons/` 폴더가 비어있음
- **조치**: 
  - favicon.png 파일 추가 또는
  - HTML에서 favicon 링크 제거

---

## 📂 4. 빈 폴더 정리

### 4.1 빈 디렉토리
- **폴더**: 
  - `assets/fonts/` (폰트는 CDN 사용)
  - `assets/icons/` (비어있음, favicon만 참조)
- **이유**: 파일이 없고 불필요
- **조치**: 
  - 폴더 삭제 또는
  - 필요한 파일 추가 후 유지

---

## 🎨 5. CSS 정리 제안

### 5.1 미사용 CSS 클래스
- **클래스**: `.logo-img` (CSS line 1929-1947)
- **이유**: 
  - HTML에서 `<img>` 태그로 로고를 사용하지 않음
  - 텍스트 로고 사용 (`.logo-text`, `.logo-sub`)
- **조치**: CSS에서 제거 검토

### 5.2 중복 스타일 확인 필요
- **확인 필요**: `.logo` 클래스가 여러 곳에서 정의됨
  - line 372-377 (Header)
  - line 1949-1953 (Multi-Page)
- **조치**: 중복 확인 및 통합 검토

---

## 💻 6. JavaScript 정리

### 6.1 console.error 유지
- **파일**: `js/main.js` (line 39, 55, 483)
- **이유**: 에러 로깅은 디버깅과 모니터링에 필요
- **조치**: 유지 권장 (프로덕션에서도 필요할 수 있음)

### 6.2 코드 상태
- **분석 결과**: 
  - 사용되지 않는 함수 없음
  - 모든 클래스와 메서드가 실제로 사용됨
  - 주석 처리된 코드 없음
  - 테스트 코드 없음
- **조치**: 추가 정리 불필요

---

## 📊 7. 이미지 파일 검증

### 7.1 사용 중인 이미지 (유지)
- ✅ `hero-main.jpg` - 모든 페이지에서 사용
- ✅ `portfolio-01.png` ~ `portfolio-42.png` - history.html에서 사용 (42개 모두 확인됨)

### 7.2 참조되지만 없는 이미지
- ❌ `about-location.jpg` - index.html에서 참조
- ❌ `cta-background.jpg` - index.html, history.html, news.html에서 참조

### 7.3 미사용 이미지
- ❌ `H_LOGO.jpg` - 어디서도 참조되지 않음

---

## 📋 8. 최종 정리 제안 요약

### 즉시 삭제 권장:
1. ✅ `components/hero.html` - 미사용 컴포넌트
2. ✅ `assets/images/H_LOGO.jpg` - 미사용 이미지
3. ✅ history.html 첫 줄 "wq" 오타 수정

### 확인 후 처리:
1. ⚠️ `assets/images/about-location.jpg` - 파일 추가 또는 참조 제거
2. ⚠️ `assets/images/cta-background.jpg` - 파일 추가 또는 참조 제거
3. ⚠️ `assets/icons/favicon.png` - 파일 추가 또는 HTML 링크 제거

### 선택적 정리:
1. 💡 `assets/fonts/` 폴더 - 비어있음, 삭제 가능
2. 💡 CSS `.logo-img` 스타일 - 미사용 클래스, 삭제 검토
3. 💡 CSS `.logo` 중복 정의 통합 검토

---

## 📝 작업 전 체크리스트

- [ ] history.html 오타 수정
- [ ] components/hero.html 삭제
- [ ] assets/images/H_LOGO.jpg 삭제 또는 이동
- [ ] about-location.jpg, cta-background.jpg 확인 (추가/제거 결정)
- [ ] favicon.png 확인 (추가/제거 결정)
- [ ] 빈 폴더 정리 결정
- [ ] CSS 미사용 클래스 제거 검토

---

## ⚠️ 주의사항

1. **이미지 파일**: 참조되지만 없는 이미지들은 실제로 필요할 수 있으니 클라이언트와 확인 필요
2. **favicon**: 브라우저 탭 아이콘으로 필요하므로 파일 추가 권장
3. **CSS**: 미사용 클래스는 향후 사용 계획이 있을 수 있으니 신중히 판단

---

## 📌 다음 단계

위 항목들을 검토하신 후, 최종 확인해주시면 일괄 정리 작업을 진행하겠습니다.
