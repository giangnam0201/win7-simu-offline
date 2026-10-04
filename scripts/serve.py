"""Quiet local server for browser smoke tests."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


ThreadingHTTPServer(('127.0.0.1', 8080), Handler).serve_forever()
