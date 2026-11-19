// 1. react에서 useState, useEffect 가져오기

// 2. 인기 애니 목록 state (popularAnimes / setPopularAnimes, 초기값 빈 배열)

// 3. 로딩 중인지 저장할 state 만들기
//      - 값 이름: popularLoading / 바꾸는 함수: setPopularLoading
//      - 초기값: true (페이지에 들어오자마자 요청을 시작하니까)

// 4. useEffect 만들기
// 5. async 함수 fetchPopularAnimes 만들기
// 6. gqlQuery 변수에 쿼리 담기 (그대로)
// const gqlQuery = `
// 			query {
//   Page(page: 1, perPage: 15) {
//     media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
//       id
//       title {
//         romaji
//         native
//       }
//       coverImage {
//         large
//       }
//       averageScore
//       episodes
//       status
//     }
//   }
// }
// `;
// 7. try 블록 시작 — 여기 안에 fetch부터 state 저장까지 넣기

// 8. fetch로 POST 요청 → response

// 9. response.json() → data

// 10. response.ok가 false면 throw new Error("API 응답 실패")

// 11. data.data.Page.media ?? [] 를 state에 저장

// 12. catch 블록 — 실패하면 목록을 빈 배열로

// 13. finally 블록 — 성공이든 실패든 로딩 상태를 false로

// 14. fetchPopularAnimes 호출 (함수 밖, useEffect 안)
// 15. 의존성 배열 []

// 16. return 위에서: popularLoading이 true면 "로딩 중..." 화면을 먼저 반환

// 17. return: ul + map으로 li 출력
