import { useEffect } from "react";
// 1. useEffect를 react에서 가져오기

export default function App() {
	// 2. 화면이 처음 뜰 때 한 번만 실행되는 useEffect 만들기

	// 3. async 함수 만들기 (useEffect 콜백 자체는 async로 못 만들어서 안에 따로 만듦)

	// 4. fetch로 https://graphql.anilist.co 에 POST 요청
	//    - method: "POST"
	//    - headers: Content-Type은 application/json
	//    - body: { query: GraphQL 쿼리 문자열 } 을 JSON 문자열로 변환

	// 5. 응답을 json으로 변환

	// 6. console.log로 찍어 보기

	// 7. 만든 async 함수 호출

	return <div>API 연결 테스트</div>;
}
