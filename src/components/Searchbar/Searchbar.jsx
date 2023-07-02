import { Component } from 'react';
import css from 'styles.module.css';
import { toast } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return toast.error('Enter correct search query')
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const { handleChange } = this;
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchForm_button}>
              <span className={"button-label"}>Search</span>
            </button>

            <input
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={value}
              onChange={handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}