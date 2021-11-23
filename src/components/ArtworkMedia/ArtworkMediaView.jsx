import SuspenseImg from 'components/SuspenseImg';
import React, { Suspense } from 'react';
import ReactPlayer from 'react-player';
import Loader from 'components/Loader';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

export function ArtworkMediaView(props) {
  const { image, className } = props;

  const styles = useStyle();

  if (image?.includes('youtube')) {
    return (
      <ReactPlayer
        className={cx(styles.mediaInner, className)}
        url={image}
        controls={true}
        width="100%"
        height="100%"
      />
    );
  } else {
    return (
      <Suspense
        fallback={<Loader type="Oval" color="#007BFF" height={32} width={32} />}
      >
        <SuspenseImg className={cx(styles.mediaInner, className)} src={image} />
      </Suspense>
    );
  }
}

const useStyle = makeStyles(() => ({
  mediaInner: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '4px',
  },
}));
