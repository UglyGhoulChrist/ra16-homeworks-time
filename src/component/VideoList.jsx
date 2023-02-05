import Video from "./Video";

function VideoList(props) {
  return props.list.map((item, idx) => (
    <Video key={idx} url={item.url} date={item.date} />
  ));
}

export default VideoList;
