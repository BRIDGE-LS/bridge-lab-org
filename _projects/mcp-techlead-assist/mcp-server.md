✅ **Fifth stage conclusion – Analysis of the "Server Features" link**

---

# **Model Context Protocol (MCP) - Server Features**

## What is an MCP Server

An **MCP Server** is like a **"modular context server"** for LLMs:
> it provides **data**, **actions** and **interaction guidelines** in a controlled, extensible and secure way.

These servers are **the primary means to enrich, expand and operationalize** what the language model can do in an application.


- The server is **the heart that provides context, data, and tools** for LLMs via MCP.
- It **exposes three main types of "primitives"** to enrich model interaction.

---

# Three Fundamental MCP Server Primitives

| Primitive | Control | Function | Examples |
|-------------|----------------------------|--------------------------------------------------|-----------------------------------------|
| **Prompts** | User-controlled | Templates or instructions that guide the model | Slash commands, buttons, choice menus |
| **Resources** | Controlled by the client application | Structured data used as context | Local files, git history, internal documents |
| **Tools** | Controlled by the model (LLM) | Functions that the model can dynamically invoke | REST APIs, file saving, information retrieval |

---

# Visual summary of primitive control

```text
User (human) ---> controls --> Prompts
Client (application) ---> controls --> Resources
LLM (model) ---> controls --> Tools
```

In other words:

- **Prompts** are chosen directly by the user (e.g.: clicking on a command).
- **Resources** are managed by the client application (e.g.: automatically uploading files).
- **Tools** are invoked by the LLM (e.g.: “write file X”, “call API Y”).

---

# Practical importance of MCP Servers

| Impact | Result | |----------------------------------|--------------------------------------------------------------------------|
| **Interaction Flexibility** | Allows different users to have different support without changing the server |
| **Context Enrichment** | LLMs receive rich context (documents, code, chat history) |
| **Intelligent Automation** | Tools allow the model to perform tasks directly |


