import styles from "./Module/ModalWinnerLoser.module.css";

type ModalWinnerLoserProps = {
    isWinner?: boolean
    isLoser?: boolean
}

const openModal = () => {
    const modal: HTMLElement | null = document.getElementById("winnerLoserModal");

    if (modal) {
        modal.style.display = "block";
    }
};

export function ModalWinnerLoser({isWinner = false, isLoser = false} : ModalWinnerLoserProps) {
    {isWinner || isLoser ? openModal() : null}
    
    return (
        <div id="winnerLoserModal" className={`${styles.modal}`}>
            <div className={`${styles.modalContent}`}>
                <div className={isWinner == true ? `${styles.modalHeaderWinner}` : `${styles.modalHeaderLoser}`}>
                <p className="honk-unique">
                    {isWinner && "Congrats! Press 'Enter' To Retry"}
                    {isLoser && "Nice Try! Press 'Enter' To Retry"}
                </p>
                </div>
            </div>
        </div>
    )
}

