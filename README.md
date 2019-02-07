
export default class App extends Component {
  state = {
    histories: [],
  };

  handleAddNote = url => {
    this.setState(prevState => ({
      histories: [{ id: v4(), url }, ...prevState.histories]
    }));
  };
  render() {
    const { histories} = this.state;

    return (
      <div>
        <h1>Play Video</h1>
        <VideoEditor onSubmit={this.handleAddNote} />
        <VideoList histories={histories} />
      </div>
    );
  }
}

#   VideoEditor 



export default class VideoEditor extends Component {
  state = {
    url: '',
  };

  handleChange = ({ target }) => {
    const { name, defaultValue } = target;
    this.setState({ [name]: defaultValue });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.url);
    this.setState({ url: '' });

    console.log( '->', this.state.url)
  };

  render() {
    const { url } = this.state;

    return (  
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          defaultValue={url}
          onChange={this.handleChange}
        />
        <button>Go</button>
      </form>
      
    );
  }
}


# list

const VidioList = ({ histories }) =>   console.log( 'histories', histories) || (

  <ul>
    {histories.map(({ id, url }) => (
      <li key={id}>
          <ViewOviever url={url} />
      </li>
    ))}
  </ul>
);

# Video 
const ViewOviever = ({ url }) => (
          <video 
                width="320" 
                height="240" 
                controls
             >
            <source src={url} type="video/mp4" />   
         </video> 
);
