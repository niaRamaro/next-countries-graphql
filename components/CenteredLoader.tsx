import Loader from './Loader'

export default function CenteredLoader() {
    return (
        <>
            <div>
                <Loader />
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}
