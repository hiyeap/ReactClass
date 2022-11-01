import {useSearchParams} from 'react-router-dom';

function Home(){
const [params, setParams] = useSearchParams();
const saveNick = params.get("nick");
return(
    <>
    <h1>Home Component!</h1>
    <h1>{saveNick}님 환영합니당!</h1>
    </>
)
}

export default Home;