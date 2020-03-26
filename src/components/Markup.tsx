import React from "react";
import Prism from "prismjs";
import { useSelector } from "react-redux";
import { RootState } from "modules";



const Markup = () => {
    // 뷰
    setTimeout(() => Prism.highlightAll(), 0)
    const code:string = useSelector((state:RootState) => state.move.codeStr).trim();

//     const code = `
// <html>
//     <div>호잉</div>
// </html>
//     `.trim();
    return (
        <div className="markup container">
            <pre className="line-numbers">
                <code className="language-html">
                    {code}
                </code>
            </pre>
        </div>
    )
}


export default Markup;