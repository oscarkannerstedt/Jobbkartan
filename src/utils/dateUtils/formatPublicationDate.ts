//Helper function to format publication Date
export const formatPublicationDate = (dateString: string): string => {
  const publicationDate = new Date(dateString);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formattedTime = `${publicationDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${publicationDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  if (publicationDate >= today) {
    return `Publicerad idag, kl. ${formattedTime}`;
  } else if (publicationDate >= yesterday) {
    return `Publicerad igår, kl. ${formattedTime}`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };
    return `Publicerad ${publicationDate.toLocaleDateString(
      "sv-SE",
      options
    )}, kl. ${formattedTime}`;
  }
};
