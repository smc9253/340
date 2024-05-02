import React, {useState, useEffect} from 'react'
import getData from '../utils/getData'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MinorModal(props) {
    const [loaded, setLoaded] = useState(false);
    const [couObj, setCouObj] = useState();

    //useEffect
    useEffect(() => {
        getData('course/courseID=' + props.course)
            .then((json) => {
                console.log('courses got', json);
                setCouObj(json);
                setLoaded(true);
            });
    }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(!loaded) {
    return (
        <>
            <h1>Our Courses Loading...</h1>
        </>
    )
}


  return (
    <div>
      <Button onClick={handleOpen}>{couObj.courseID}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {couObj.courseID}
          </Typography>
          <Typography variant="h6" component="h2">
            {couObj.title}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {couObj.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}