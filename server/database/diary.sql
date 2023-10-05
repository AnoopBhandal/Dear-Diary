DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    content VARCHAR NOT NULL,
    category VARCHAR NOT NULL, 
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO entries (title, content, category, date)
VALUES
    ('Test Title', 'Test Content', 'Test', CURRENT_TIMESTAMP),
    ('Test Title2', 'Test Content', 'TestCategory', CURRENT_TIMESTAMP),
    ('Test Title', 'Test Content', 'Test', CURRENT_TIMESTAMP),
    ('Test Title', 'Test Content', 'Test', CURRENT_TIMESTAMP),
    ('Test Title', 'Test Content', 'Test', CURRENT_TIMESTAMP);
