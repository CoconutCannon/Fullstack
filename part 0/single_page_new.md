```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa as JSON
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: Browser stays on the same page
```
