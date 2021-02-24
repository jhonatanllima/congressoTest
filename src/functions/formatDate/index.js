import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function formatDate(date) {
  if (date) {
    const formattedDate = format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });

    return formattedDate;
  }
}
