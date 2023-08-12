import { BorderedItemProps } from "./BorderedItem.props";
import styles from './BorderedItem.module.css';
import cn from 'classnames';
import Link from "next/link";

const BorderedItem = ({ children, weight, className, href, arrow = true, color = 'grey', ...props}: BorderedItemProps) => {
  return (
    <Link href={`${href}`} className={cn(styles.link, className, {
      [styles.red]: color == 'red',
      [styles.green]: color == 'green',
      [styles.grey]: color == 'grey',
      [styles.bold]: weight == 'bold'
    })}>
      {children}
      { arrow 
          &&
          <div className={styles.arrow}>
            <svg width="8" height="8" viewBox="0 0 8 14" fill="var(--black)" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.39983 4.88006L1.80983 0.29006C1.62247 0.103809 1.36902 -0.000732422 1.10483 -0.000732422C0.840647 -0.000732422 0.587195 0.103809 0.399833 0.29006C0.306104 0.383023 0.23171 0.493624 0.180942 0.615483C0.130173 0.737343 0.104034 0.868048 0.104034 1.00006C0.104034 1.13207 0.130173 1.26278 0.180942 1.38464C0.23171 1.5065 0.306104 1.6171 0.399833 1.71006L4.99983 6.29006C5.09356 6.38302 5.16796 6.49362 5.21872 6.61548C5.26949 6.73734 5.29563 6.86805 5.29563 7.00006C5.29563 7.13207 5.26949 7.26278 5.21872 7.38464C5.16796 7.5065 5.09356 7.6171 4.99983 7.71006L0.399833 12.2901C0.211529 12.477 0.105214 12.7312 0.104277 12.9965C0.103339 13.2619 0.207856 13.5168 0.394834 13.7051C0.581811 13.8934 0.835934 13.9997 1.1013 14.0006C1.36666 14.0016 1.62153 13.897 1.80983 13.7101L6.39983 9.12006C6.96164 8.55756 7.27719 7.79506 7.27719 7.00006C7.27719 6.20506 6.96164 5.44256 6.39983 4.88006Z"/>
            </svg>
          </div>
       }
    </Link>
  )
}

export default BorderedItem