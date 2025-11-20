import FadeUp from './FadeUp';

export default function SplitText({children}) {
    return (
        <>
            {children.split(" ").map((char)=>{
                return <FadeUp>{char+"\u00A0" }</FadeUp>
            })}
        </>
    )
}
