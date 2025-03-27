import LetterMesh from "./LetterMesh";

export default function WordMesh(props) {
    let split = 0
    const populateWord = () => (
        <>
            {props.word.split("").map((letter, index) => (
                letter === " " || letter === "," ?
                    letter === " " ?
                        split = index+1
                    : null
                : (
                <LetterMesh key={index}
                            letter={`${letter}`}
                            font={props.font}
                            charPos={index - split}
                            color="white" />
                )
            ))}
        </>
    )
    return (
        populateWord()
    )
}
