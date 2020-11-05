import { ReactNode } from 'react'

import styles from '../styles/Sidebar.module.scss'

interface Props {
    position: 'left' | 'right'
    handleClose(): void
    children: ReactNode
}

export default function Sidebar({ handleClose, position, children }: Props) {
    return (
        <div className={`${styles['sidebar-container']} ${styles[position]}`}>
            <button className={styles.button} onClick={handleClose}>
                Close
            </button>
            <div className={styles['sidebar-content']}>{children}</div>
        </div>
    )
}
