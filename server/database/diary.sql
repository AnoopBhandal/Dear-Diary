DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(13) NOT NULL, 
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO entries (title, content, category, date)
VALUES
    ('Test Title', 'Test Content', "Test", CURRENT_TIMESTAMP)
