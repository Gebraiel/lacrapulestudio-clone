import FadeUp from './FadeUp';

export default function SplitText({children,Animation="motion.span",classes=""}) {
    return (
        <>
            {children.split(" ").map((char,index)=>{
                return <Animation className={classes} key={index}>{char+"\u00A0" }</Animation>
            })}
        </>
    )
}
