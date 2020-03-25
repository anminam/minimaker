import React from "react"
import Prism from "prismjs"

const Markup = () => {
    setTimeout(() => Prism.highlightAll(), 0)
    const code = `
<html>
    <div>호잉</div>
</html>
    `.trim();
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