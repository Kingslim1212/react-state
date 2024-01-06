import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Olorun Leke",
        bio: "Web Developer",
        imgSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwICBQgIAwYGAwEAAAACAAEDBBIFEQYTISIyFDFBQlFSYXEHIzNigZGhsXLB8BUkQ4KS0SU0U2Nz4TVUoib/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgIDAAIDAQAAAAAAAAABAhEDIRIxQSJRBBNhMv/aAAwDAQACEQMRAD8AxktRVgY3jxJiaar7qtcQHfiSTj3Fx76dP1Sm5Hxo4PbCnqgfXJMYjeKi10YxpMef/CqP4fZZUnWpxnfwSm+H2WVJlnxelZlM6NkQo1qgsWRuCSLJamr2S4plm3/l90+7Jj+MPwRE1b4nJYcQ+4yime4pOJFvxfhZQXdTpWxhLYg5Ce8hkkEyNDZx5EGmTYkg4o0ezrTe8lNUKI4pYkPCjxg3UjlCDzJlwE+6isS8YNnmmLuoBP7qQ1wI80tQbqVTVGqMiMeq7KLaSEjFYmLCTkG2hxNvZfiSTbcT2KNuD+JNk24tfjk+qWsffTQSb4p6ubfUYeMUtNpW2qIY5dEoi6wrEnGtZLVEGjYx+9+ay5pYa+Ksv01khaSWzInVEJmSxZJzTc1QNOFx/wAoo1sWyd06e4oZVcYHxXWqJLLPVcZbvd5mUmmwirqOCIiu4Ssd2+fMtpxyf9Vz5ctyv4xNrcZgqDGwSERFm3hTY1Gt4E/FotihhuU0n9LZfdMVWj+LUXrZaOQbeta+SVww+U/PknuFNISVmo0Eu/bLul3lLsWdmq1xy8gZKj30WSA7ilex5opLTRsyIhFA2QMYp+NreqiF04L+6lThTNepAUl3WUUiK/cUmKoIFlZVwJaUe8mdUnjlI0zkSJ/oq7xb2I/iTJPuJ/FvYqNHubx8K6PjjntUVxb6ig2+K0x4xQ0+7LS3fyqvxLEYKq3k8FvMltpE+f8A8Cs8S0M29gizrso4/rbKgidHkitVo2J9xVsQFW1P4vsptVdqSHvbEuip9VvcPdWuN1Nsc55XSyw6hgpzErdYXeJa+kfWhxdiytEMlQe51et0fNa/CqOSwd675Lk5bfrt4ZJ1FnRRip4B+uhMxQSB1VJ1UndXPL23rMaRaK0mJQyyUkQwVO1xtFmY36Gdu3xZc4icuE+ISyJdmkuDjXPNMMOGnmGri4Zidi8+ddXFnv8AGuTm49fljFCyMmJN32Ia0lrpls6NyWyZGVONKlYez2ZcKJ2kNI5QKWNTGpsqpYcG7up0CI+qKZ5RGnAkFRYrZ1xk7opFpd1OjOKLXCp7UusUh/dlH1PqR3kdY08sJDcorU8gQ23EtpenJpV4oG+KjixKZVRarj3lGcle1yLwCvwQlQuruF/8HlFUjss8PrXL4GSPJBkHVoCy+1OtFJUGMcXF9GTjUM9gl3ttvayXhxWGX/yjfQuPaXR4ANR6g67e7olkOfirCmocQ0bqdZym6DrB0Oyj0uFRSmUlRrJBuz3Tyby2dCXjM8ktsdoiIiwDvPkzNzeb+ai2XrbSYSd6bPCsUGvCUQlESEVmcXDFKesKf9qyRRXbo3u305vilaHD66UQ3u8Xa60Nfhw18JDLEJCQuxF4djrCWYZt8sfPHaDRR4hyYZP2jrxL/UFiZ/DNlSaaP+4RCfFr/wAnzyfsWqo9HaKnCIqeLVWlmWrJ8jd+1nfJ/wAlV6Q4WNee+RCMIEdo5Zu+Wza/xVzKebP+v8HNyRMykOwpQCK6NuXSPvI8lJcRTkUcZmls5ihuyFqtWpI+6hyCMu8o/si/66reopgMnXw0e8SU9Nd1lNzlVjjYbJJyT/JZe8i5NIp8ovVaByFE9pq0DAJ7PWyj/Lm6S+D2mI3fi3VfjXP5RlceAbBIFSuy31bo5HVbpykIj7rKAeiEf/sl/Sy0xmom5RWUn/h5VUOK2cOj+qpig1twl7rIodDqaX+PJ/SyUml3OMZYg4Et8OhNFZ7ef6JRaGYeP8WcubrM35J7T5RlaV45aMilK0o42YPB2d9rKPQx3zfrJaqs0Ri9VyQi3eOOQrmdu34dipKqgLCsVKDiEcnEtjZjzNm3wS17aTPdi1h3IVHqoBl3TuLdd7RyuN25mZ32M6JpivEUxUy1NRU6ikHh4jIdmzpZZY4Xbouc00GiktJT22U0glt3JB282fRzrRYXVDUVM48mqYBEm9tk2efSzc7N5rN4NTTxQ2y4jJdJxeDZ9DMreOoKl9lONXFzHu7/AJZ9vmoy49qmVXk7jEBWLN1mqLlN5W2xPb58/wCTqVNUX8BbpKjxfGaago6mmOLWVNQLOBW8zbW5+japxx7GWWow4x+6lkA2IxP3k8xCQEulzaiIKdiDfFBxShcQRaNHb7E4MpKO5XoNcCixUqXNJubibA0wBEiKexLxPabrEWsFMRnuXWotaPdU+KtutyluCoc72b3vN91IItziUKsLh/5G+66q4Qu4k2RpJvvpmSWzdS0Cr1KpC63dVZrBUylNKwLViSZCTQmg5CkZLmsXpHJ/+h97VD93WuMx/XgsRpGxS49KUXEIj9lcgx9lZjrhJPGMoVIyRSlGJC1w3KFCd+91usKs6aQd28VF6dWN22WEYhNHRx/vnsxyYSYXybzyTGJUdNiU10smvLZcd2T5NtZndss/iqujp6Y944hFXMj01PD6q0Rt+Cyudb9a9IkjiBkIcIisRpNMMuKkIFdqxZi8+llocYqp6egnqYhttyYbvF8lhjcjO4yuIizIu1Vhj9Y8mXw6IJzVCmWf3ksTJWzmjjQCj5MKQ0qWFRcp7V0Pk3vJBwF3k49SKS9QKXZ9EFce6jGMe6jAxTrOi7EHu2JNo95KvFFmKhTppOq6vKwB3uu33UszsVVMfKJreqO0v7LqrgOVM2/bEoj6zvKc0AjvJiVh6ichbRSuFPU8u+mZEy81m93dpeTI8dja+jMkiapGLjIR/ETMsFjulM9RdTYeWri60o8R+T9DLOk0kvtZSk/ETuqnDfqbyOj1GkGHgdp1MH9bKleUa2vnniK4SJrS7WyZvyWfwXBJ8Xr4qaLdEiZiK3mbtV7g1NyeERMSEhJ2IS52dnydn8W5kuTCYxpwW5ZJFTDqg1gcXd7UqjrRPdOIrvwqacd4J2jgELStWEy6dlw3S6d5DDcH+YhdW1DQyS2lUS6we70KTTiIBbaO8pkdsUKxzz/TXHj/AH2zWmxarCiEB4iFvk+f5LBi4rWaf1sg00QgVozSZF2ZM2bN8/ssUNTYfrR3e8P5rp4sLcNuXl5JM9JbAlWEjjtsTn8yVPo3ajFrEbB7yDxkkcINNE6fMSSH99BmxdLG4OsicUYoKHd5FmXdRXo9co0uOg1UqiUD+1L3mRVMvEpOjOHSVUxFKNtMRNaXffpy8F0acW0uKGeq3acS94i5mV1RaKxTgJXTyF1iHIA+DvtdbKlo6eKmGMIxttZOUmyER7ubfJ1vjjJGVrOR6G4eAXVAXW9W53+rrmXpKxeCnP8AYmEiMV2T1BR7NnOwu/jlt+S6vpljAYRg8859UHK3t7G+LrznURyVVTLPVl62YnMubN8+n5Komoow+6P9WbqTDCRmIgNxFlaPj0KSFLYF1o7w5jzc3atb6MMH/aWk8UhjdFTC8r9mfRn8XZMm40V0LLCKCDWiJTkLHKXPtfbl8FOx7Q+Kvuq6S2Kr67FsGR+18uZ/HpWxQyU5SZe14ZXG7ji9dQVNHNq62CSAubeHY/k/M6epYLAXXzjEwtIRcewmzZQjwXDS56SJvwjl9lz5fx/1XXj/ACv3HPYQUgYZKrdiEjLuiOa3QYPh4cNJF8s/upccQRDbEAiPYLZKJ/F3e6q/zJJ1HNdKtESl0Yn5R/mSMTDpsyZ3fb455Lj8sJBdBKNpD9/0y9PY4IlR764VpvRR09eJAXFtt8+f8l14yYzUcWWVyu6ykEmqDrW/RvLs6VOJ5IrRlEhIhZxEhdndnbNnZn52dulNQCITW6q67h7fgumejWuoMXppNHcapYpxjzkpBqAZ8md8yFn6GZ3zbLt8EsuOVWHJZ052EgpxjHvLrGK+ivCai4sMqZaQuqBZGDfPbl8VzjSTRbFNHpra2K6AiyCePaB+GfQ/g/1WGXHY3x5ZUBiRO42XKJcSPWLPTXySWGM0WpHvJsZUrWqbKrcAoC7yb1UieGRDWJdn03eA4TJi9Tv7tNH7U/szeK2ccAhuxDaI5AAj2cyfGliwqmHD6QeEWuLtftfxTtFF66mH3/ttXVpwbaEGsARSIv4v43+zJ1R6uUYqacu6L5/Jaocn9KuKcotpALiJzLybYzfN1iaLDxCG47S6Su5laYzMNfjFTPLdqBkyu2ZALdrdPPzdqvdF9H5MbqROYSGjj28PG7czu/Q3h0pXLUVjhcqoosJEsNln9mIjw9Lu7/Rl0T0U4cNHhtTVmPrKiWxvwi393f5Kux7DIqICgi/jG26Ph4dDZu2xdAwSiHD8Kpqb/TBs/N9r/VLDLymyyx8bpOa5KQQVkCCCCACCCCAYqaaKqCyYbhXNvSBgcEVBOUQ7w8xdOS6gsZpw2to5xQHDmCwxk7v9/wDtW2HVkmF4lTYlEW9TSsZCPO457W+LZqCw74ifixeOzJTJYbOqO9/bJOE9FQyRzwxzA90cgsYv2s7Zs/yTNbh9NW00tNVxDLFMORgXM7Kk9HlUVVolh5EVzxx6p/5Xdm+jMtMkbi+nHo/kwiIq/CSKWjH2oFtOJu3Ppb6ssAQkvUckYmBCe8JM7OL8zs64Zp9opJo/iWtphuw+pJ3i/wBsukH+7dreSxzx+xvhn8rHs6PMU64JtwWLeCZFelWpnVEloPRDARwlUn/GL6M+xScPC6vH3Rd/y/NOTxW0FMPut9kWE/5yX3QZvm//AEun65Pi0MhEblltKsWGiwHEJz62bCPnkytsRqrAl/2yb+l+f5LnHpIxEeQU1IA6wZpLzG7LMW2/mydvZSKfQ3R2p0hrNfMJDTCWZdjvm75v27XfZ5di6Ri+J0mA0fIsPt19u74drv2v4Kno9Iqag0ZpI8M1etIMrR6H6SdudvLpfm2KjBp6qpHeKSWQt64drk/Nn+ujJZ95X/F53XUXmiVFPimJcpqyKSOEryIi63Q368V0VVuA4cOG4dHBbvc5v2urJbSaZDQRI0wCCCCACCCCACzGk+ElUQyFFdvC/wAFp1HrgI6YhDiQHnKpg5PiQx1G7bI7F59Cfln5R1eFWGmNJ/j04nu6wWcfPbt+ii4dEMsIz97O7zbY7JpdN9FNRrdG5ae72c5/XJ/zW7XOPRGHqcQs4RnyIfNm2/RdHSUJ1X4thtNjWGy0NaN0Uo/Fn6HbxZ1LqTspzLw+qXGNoCPdZkB550jwKrwDEpKSoG63aBjzSD0O35t2qmdehtKMAhx7DyhO0ZxzeGTuv2eT9K4hiFCVLUyU1VFZJGTsYlzs7frnXPnhp0Y8nSlJk3crA6UeomeRl3lnppMo9JGN2Gj/AMbfZQcNk1QVMnvM33VjE37iP4FSTSaqjL3pGXVfbl+VHxGcrys3rhdt5cw0qqZKivITHV6mNoxHxz2u/wAG+i6BiMvqSLu7VzGapKorCk3vWSZkXP5fmlPZZelnQRCAXcVo728zO79Lrb6FYdyivKrlEtXDw9l36+yx1GG/FZxXbvnzN8uf4Lr2AUA0GFxRDxE2ZebqkxZIIIJmCCCCACCCCADI0TI0AEEEEBzD0uYeMU1DiEQ23E8Zl8M2+y5zLLJSzSiHspsn3e8zNn82yXafSZScq0VnJuKAxk+DPk/0dcbnHW0w3kW7m4/Bsss04jJvfQy5a3Exu6oP8c3XU1yf0OnbX4mR7o6ofu66HNiBB/VkI9LoqolSvrZgh7u+fw5vqpSi0MRBHeftD2kpaRiWB9J2j5VdH+1qKP18A+ut6wdvjl9s1v02YsYuJbRfo7UrNh5rKQh6qRyla7TvR0sDxK6Ef3GfN4i6GfpH4dCytqzuK5Xo4P8AJ/yrN4mVgRD77/RnWmqN2ElisWq76ke6IurqYqdIqzk+D1MvuOw+b7GWDoGEDIt62PJvPJtvzd3VrpbioyhFRRFdaTGfZsfYyrMPErBEB3rmf4u+xvntRiWVbHRigkqqwSMhuj72TM5M+1vhll811kOAVnNGtHhw+jgKUt4Qbd+HT4rSMmAQQQTAIIIIAIIIIAMjRMjQAQQRICo0qgnqsBq4Ke2843a0mzzbLo8VwOSOQw4eHZxdOa7xj1WVLLBIG9q3c3D9dPOuMYjb+1a4QtIdeTjvdDu7t98lUTkt/RzXDS19TBLulUCzD5tm+X1XQqWrg13Wkl5hG19njtXG6ZyimKSL1ZCTWkPQ7eK6XorpFHWgMEpCNYPV7+W3NkrTnpvoGLVDdzp1R6aYZacZP1sTkcl6kxhxklpsOMk4mFZpBhFNjmGS0VXwltA+mMm5ibxZcFxvDKjB8RloqwHaSPpbmNuh2816Ldc9020rpsOxvkvJaOc44hvKaNidnfN8s+zLJKh//9k=",
        profession: "Software Engineer"
      },
      shows: false,
      timeElapsed: 0
    };
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeElapsed: this.state.timeElapsed + 1
    });
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {this.state.shows ? 'Hide' : 'Show'} Profile
          </button>
          {this.state.shows && (
            <div>
              <h1>{fullName}</h1>
              <p>{bio}</p>
              <img src={imgSrc} alt="profile" />
              <h3>{profession}</h3>
            </div>
          )}
          <p>Time Elapsed since component mounted: {this.state.timeElapsed} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
