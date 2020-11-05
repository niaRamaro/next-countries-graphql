import { ReactNode } from 'react'

import MaterialIcon from './MaterialIcon'
import styles from '../styles/Sidebar.module.scss'

interface Props {
    position?: 'left' | 'right'
    width?: string
    handleClose(): void
    children: ReactNode
}

export default function Sidebar({
    handleClose,
    position = 'left',
    width = '30%',
    children
}: Props) {
    return (
        <>
            <div
                className={`sidebar-container ${styles['sidebar-container']} ${styles[position]}`}
            >
                <button className={styles.button} onClick={handleClose}>
                    <MaterialIcon icon="close" />
                </button>
                <div className={styles['sidebar-content']}>{children}</div>
            </div>

            <style jsx>{`
                .sidebar-container {
                    width: ${width};
                }
            `}</style>
        </>
    )
}
