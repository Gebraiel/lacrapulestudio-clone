import FadeUp from './FadeUp';

export default function SplitText({children,Animation}) {
    return (
        <>
            {children.split(" ").map((char)=>{
                return <Animation>{char+"\u00A0" }</Animation>
            })}
        </>
    )
}
