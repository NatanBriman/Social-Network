import { Link } from '@mui/material';
import { useState } from 'react';

const ReadMore = ({ text, maxWidth }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleIsExpanded = () => setIsReadMore((isExpanded) => !isExpanded);

  const textThatFits = text.slice(0, maxWidth);
  const isShowReadMore = text.length > maxWidth;

  return (
    <>
      {!isReadMore ? textThatFits : text}{' '}
      {isShowReadMore && (
        <Link style={{ cursor: 'pointer' }} onClick={toggleIsExpanded}>
          {!isReadMore ? '...read more' : 'show less'}
        </Link>
      )}
    </>
  );
};

export default ReadMore;
