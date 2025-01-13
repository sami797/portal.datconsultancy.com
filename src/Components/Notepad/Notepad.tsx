import React from 'react';
import { connect } from 'react-redux';
import apiInstance from "@services/axiosInstance";
import styles from './styles.module.scss';
import { message } from 'antd';
import { getLoggedInUser } from 'Redux/Reducers/UsersReducer/action';
import { RootState } from 'Redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


interface Note {
  id: number;
  notes: string;
}

interface NotePadState {
  notesText: string;
  noteList: Note[];
  editingIndex: number | null;
}

interface NotePadProps {
  userId: number | null;
  getLoggedInUser: (args: { reload?: boolean }) => Promise<void>;
}

class NotePad extends React.Component<NotePadProps, NotePadState> {
  constructor(props: NotePadProps) {
    super(props);
    this.state = {
      notesText: '',
      noteList: [],
      editingIndex: null
    };
  }

  componentDidMount() {
    this.props.getLoggedInUser({ reload: false });
    this.fetchNotes();
  }

  fetchNotes = async () => {
    try {
      const response = await apiInstance.get('/notes');
      this.setState({ noteList: response.data });
    } catch (error) {
      console.error('Error fetching notes:', error);
      message.error('Failed to load notes. Please try again.');
    }
  };

  onSaveNotes = async () => {
    const { userId } = this.props;
    const { notesText, editingIndex, noteList } = this.state;

    if (!userId) {
        message.error("User ID not found. Please log in.");
        return;
    }

    try {
        if (editingIndex === null) {
            // Creating a new note
            const response = await apiInstance.post('/notes', {
                notes: notesText,
                userId: userId
            });
            this.setState(prevState => ({
                noteList: [...prevState.noteList, response.data],
                notesText: ''
            }));
            message.success('Note created successfully.');
        } else {
            // Updating an existing note
            const noteToUpdate = noteList[editingIndex];
            const response = await apiInstance.put(`/notes/${noteToUpdate.id}`, {
                notes: notesText,
                userId: userId
            });
            const updatedNoteList = noteList.map((note, index) =>
                index === editingIndex ? response.data : note
            );
            this.setState({
                noteList: updatedNoteList,
                notesText: '',
                editingIndex: null
            });
            message.success('Note updated successfully.');
        }
    } catch (error) {
        console.error('Error saving note:', error);
        message.error('Failed to save note. Please try again.');
    }
  };

  onChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      notesText: event.target.value
    });
  };

  onDeleteNote = async (index: number) => {
    const { noteList } = this.state;
    const noteToDelete = noteList[index];

    try {
      await apiInstance.delete(`/notes/${noteToDelete.id}`);
      const filteredNotes = noteList.filter((_, i) => i !== index);
      this.setState({
        noteList: filteredNotes,
        notesText: '',
        editingIndex: null
      });
      message.success('Note deleted successfully.');
    } catch (error) {
      console.error('Error deleting note:', error);
      message.error('Failed to delete note. Please try again.');
    }
  };

  onEditNote = (index: number) => {
    const { noteList } = this.state;
    this.setState({
      notesText: noteList[index].notes,
      editingIndex: index
    });
  };

  render() {
    const { notesText, noteList, editingIndex } = this.state;

    return (
      <div className={styles.notePad}>
        <div className={styles.header}>
          <h2>Notes</h2>
        </div>
        <div className={styles.inputSection}>
          <textarea
            rows={5}
            placeholder="Enter notes here..."
            value={notesText}
            onChange={this.onChangeValue}
            className={styles.textarea}
          />
          <button
            className={styles.saveButton}
            onClick={this.onSaveNotes}
          >
            {editingIndex !== null ? 'Update' : 'Save'}
          </button>
        </div>
        <div className={styles.notesList}>
  {noteList.length > 0 ? (
    noteList.map((item, index) => (
      <div key={item.id} className={styles.noteItem}>
        <div className={styles.noteHeader}>
          <h3>Note {index + 1}</h3>
          <div className={styles.noteActions}>
            <FontAwesomeIcon
              icon={faEdit}
              className={styles.editIcon}
              onClick={() => this.onEditNote(index)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.deleteIcon}
              onClick={() => this.onDeleteNote(index)}
            />
          </div>
        </div>
        <p className={styles.noteContent}>{item.notes}</p>
      </div>
    ))
  ) : (
    <p>No notes available</p>
  )}
</div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userId: state.usersReducer.loggedInUserData?.data?.id || null,
});

const mapDispatchToProps = {
  getLoggedInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);
