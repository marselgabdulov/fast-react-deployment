import React from "react";
import { Upload, Icon, message } from "antd";
import "./ImageUploader.css";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isValidFormat =
    file.type === "image/jpeg" || "image/jpg" || "image/png" || "image/gif";
  if (!isValidFormat) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isValidFormat && isLt2M;
}

class ImageUploader extends React.Component {
  state = {
    loading: false,
    fileName: ""
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
    this.setState({ fileName: info.file.name });
    console.log(this.state.fileName);
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name={this.props.uploaderName}
        listType="picture-card"
        className="image-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        value={this.state.fileName}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={this.props.uploaderName} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

export default ImageUploader;
