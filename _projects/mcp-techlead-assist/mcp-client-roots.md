
# **Model Context Protocol (MCP) - Client Roots**

## What are "Roots" in MCP

> **Roots are the secure and controlled bases where MCP servers can act.**
> They define **which parts of the file system** the server can **see, navigate and interact** with, always under user control.

Roots allow:

- **Logical and secure organization** of the context
- **Separation between environments and projects**
- **Solid foundation for intelligent agents** to interact with multiple data spaces

 **Roots** are **entry points into the file system** that the client (Host) exposes to the server. They **define where the server can operate**: which folders, projects or repositories it can see and manipulate. **Roots are fundamental to delimit and organize the context** that an MCP server can access.

---

# Interaction Model with Roots

| Function | Description |
|-------------------------|--------------------------------------------------------------------------|
| **Exposition via Interface** | Users can manually select folders/projects that become Roots. |
| **Automatic Detection** | Clients can automatically detect Roots based on Git or configs. |

> The protocol **does not mandate** a single way to define Roots — the implementation is flexible.

---

# Roots Features and Messages

| Operation | Description |
|------------------------------|-----------------------------------------------------------|
| `roots/list` | Request sent by the server to get the current list of Roots. |
| `notifications/roots/list_changed` | Notification sent by the client when the list of Roots changes. |

### Example flow
1. Server asks: `"what Roots are there?"` (`roots/list`)
2. Client responds with the current list
3. If the list has changed, client sends `roots/list_changed`

---

# Structure of a Root

Each Root includes:

- **`uri`**: URI of the root directory (required, e.g. `file://`)
- **`name`**: Friendly display name (optional)

### Single example:
```json
{
"uri": "file:///home/user/projects/myproject",
"name": "My Project"
}
```

### Example with multiple Roots:
```json
[
{
"uri": "file:///home/user/repos/frontend",
"name": "Frontend Repository" },
{
"uri": "file:///home/user/repos/backend",
"name": "Backend Repository"
}
]
```

---

# Security Considerations for Roots

| Client (Host) | MCP Server |
|----------------------------------------------------|-----------------------------------------------------|
| Request consent before exposing Roots | Respect the limits defined in the Roots |
| Validate and control access to each Root | Do not exceed the boundaries of the Roots |
| Monitor Root changes | Dynamically adapt to notified changes |


