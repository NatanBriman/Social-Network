import { Link } from '@mui/material';
import { useState } from 'react';

const ReadMore = ({ text, maxWidth }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleIsExpanded = () => setIsReadMore((isExpanded) => !isExpanded);

  const textToDisplay = !isReadMore ? text.slice(0, maxWidth) : text;
  const isShowReadMoreLink = text.length > maxWidth;
  const linkText = !isReadMore ? '...read more' : 'show less';

  return (
    <>
      {textToDisplay}{' '}
      {isShowReadMoreLink && (
        <Link style={{ cursor: 'pointer' }} onClick={toggleIsExpanded}>
          {linkText}
        </Link>
      )}
    </>
  );
};

export default ReadMore;
