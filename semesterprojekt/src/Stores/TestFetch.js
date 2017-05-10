/**
 * Created by Yousef Mohsen on 10/05/2017.
 */
import axios from 'axios';
class TestFetch {




 get data() {
        axios.get(`http://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                console.log("hey from get")
                console.log(posts);

            });
    }







}
export default new TestFetch();
