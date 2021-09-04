import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components'
import {
  Button,
  Grid,
  Snackbar,
  Typography
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert';
import ClipLoader from 'react-spinners/ClipLoader'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 400,
  height: 400,
  padding: 4,
  boxSizing: 'border-box',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const StyledDrop = styled.div`
  margin-top: 50px;
  border: 4px dashed grey;
  cursor: pointer;
  padding: 20px;
  display: inline-block;
  &:hover {
    border: 4px dashed green;
    color: green;
  }
`;

const StyledButton = styled(Button)`
  margin: 20px 10px;
`;

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImageLabel = styled(Typography)`
  margin-top: 20px;
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ScanPlant = props => {

  const [files, setFiles] = useState([]);

  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [predictOpen, setPredictOpen] = React.useState(false);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    type: 'file',
    name: 'file',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      setPrediction('')
    }
  });
  
  const removeImage = () => {
    setFiles([])
    setPrediction('')
  }

  const submitImage = () => {

      let formData = new FormData()
      formData.append('file', files[0])

      console.log(formData)
      fetch("https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/upload", {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000);

      setUploadOpen(true)

  }

  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000);
  // }, [])

  const [prediction, setPrediction] = useState('')

  const getPrediction = () => {

    fetch("https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/predict")
    .then(res => res.json())
    .then(data => setPrediction(data))

    setPredictOpen(true)
}

  const thumbs = files.map(file => (
    <>
    <div style={thumb} key={file.name["Items"]}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onChange={() => console.log(file)}
        />
      </div>
    </div>
    <StyledImageLabel
      variant="h4"
      color="secondary"
    >
      Image Name:
    </StyledImageLabel>
    <StyledParagraph>{file.name}</StyledParagraph>
    </>
  ));

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUploadOpen(false);
    setPredictOpen(false);
  };

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
        <StyledContainer>
          <StyledDrop {...getRootProps({className: 'dropzone'})}>
            <input type="file" name="file" {...getInputProps()} />
            <p>Drag 'n' Drop Image here, or Click to Select Image</p>
          </StyledDrop>
          <div>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={removeImage}
              >
                Remove Image 
              </StyledButton>
          </div>
          <aside>
            {thumbs}
          </aside>
          <div>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={submitImage}
            >
              Upload Image
            </StyledButton>
          </div>
          {
            loading ?
            (<ClipLoader size={30} color={'#F37A24'} loading={loading} />) :
            (
              <div>
              <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={getPrediction}
                >
                  Predict
                </StyledButton>
              </div>
            )
          }
          <div>
            {
              prediction != '' ? (
              <div>
              <StyledImageLabel
                variant="h4"
                color="secondary"
              >
                Prediction:
              </StyledImageLabel>
              <StyledParagraph>{prediction}</StyledParagraph>
              </div>
              ) : null
            }
          </div>
          </StyledContainer>
          <Snackbar open={uploadOpen} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Image Uploaded!
            </Alert>
          </Snackbar>
          <Snackbar open={predictOpen} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
              Prediction Made!
            </Alert>
          </Snackbar>
    </>
  );
}

export default ScanPlant;