import {Button as ButtonN} from "@mui/material";
import styles from "./Button.module.css"
export function Button({variant, onClick, role, children}) {
	return (
		<ButtonN onClick={()=>{onClick(role)}} variant={variant} className={styles.marginRight}> {children} </ButtonN>
	)
}