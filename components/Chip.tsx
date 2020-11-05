export default function Chip({ text }: { text: string }) {
    return (
        <>
            <span>{text}</span>

            <style jsx>{`
                span {
                    border: 1px solid grey;
                    border-radius: 10%;
                    padding: 0.4em;
                    margin: 0.2em;
                }
            `}</style>
        </>
    )
}
