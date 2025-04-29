# Model Context Protocol (MCP) - Basic Protocol

## The **Basic Protocol**

The **Basic Protocol** establishes the universal form of MCP communication, 
an exchange based on JSON-RPC Requests, Responses, and Notifications, with support for authentication, batching, and rigorous message validation..

It defines **how client and server exchange messages** in a standardized way, allowing interoperability.

- Based on **JSON-RPC 2.0**
- Includes **small specializations** specific to the MCP context

Is the backbone of client-server communication, ensuring interoperability, security, and automated validation based on a clear and extensible standard.

---

## Message Structure

The protocol defines **three basic types of messages**:

| Type | Function |
|--------------|------------------------------------------------------------------------|
| `Request` | A request that requires a response (e.g. "Send me a list of Resources"). |
| `Response` | The response to a `Request`, containing the result or an error. |
| `Notification` | A one-way notice without the need for a response (e.g. "Status update"). |

### Examples

#### Request
```json
{ 
"jsonrpc": "2.0", 
"id": 1, 
"method": "getRoots", 
"params": {}
}
```

#### Response
```json
{ 
"jsonrpc": "2.0", 
"id": 1, 
"result": { 
"roots": [...] 
}
}
```

#### Notification
```json
{ 
"jsonrpc": "2.0", 
"method": "logMessage", 
"params": { 
"message": "Server started" 
}
}
```

---

## Batching Support

The MCP **supports batching**: multiple requests and notifications can be sent in a **JSON array**.

> **Requirement:** Every MCP server must be able to receive messages in batches.

---

## Authorization (Auth)

| Transport | Authentication Strategy |
|----------------------|-----------------------------------------------------|
| **HTTP/SSE** | Uses the default `Authorization` scheme defined by MCP. |
| **STDIO (console)** | Does not use HTTP authentication; can fetch credentials from the system. |

> Clients and servers **can negotiate** custom authentication schemes as needed.

---

## Validation Schemas

MCP defines two levels of formal validation for messages:

- **TypeScript Schema**
> This is the main _source of truth_. It defines the structures used in the protocol.

- **JSON Schema**
> Automatically generated from TypeScript schemas.
> Used for **automatic validation** in tools, servers, and SDKs.


