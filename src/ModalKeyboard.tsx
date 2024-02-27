import { Keyboard } from "./Keyboard";
import styles from "./ModalKeyboard.module.css";

type KeyboardModalProps = {
    disabled?: boolean
    activeLetter: string[]
    inactiveLetter: string[]
    addGuessedLetter: (letter: string) => void //this will return nothing
}

export function ModalKeyboard({disabled = false, activeLetter, inactiveLetter, addGuessedLetter} : KeyboardModalProps) {
    return (
        <div id="keyboardModal" className={`${styles.modal}`}>
            <div className={`${styles.modalContent}`}>
                <div className={`${styles.modalBody}`}>
                    <div style={{ alignSelf: "stretch" }}>
                        <Keyboard
                            disabled={disabled}
                            activeLetter={activeLetter}
                            inactiveLetter={inactiveLetter}
                            addGuessedLetter={addGuessedLetter}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

