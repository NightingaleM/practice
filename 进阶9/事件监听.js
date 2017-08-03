//添加事件监听
function addEvent(node, type, handler) {
	if(!node) return false;
	if(node.addEventListener) {
		node.addEventListener(type, handler, false);
		return true;
	}
	else if(node.attachEvent) {
		node['e' + type + handler] = handler;
		node[type + handler] = function() {
			node['e' + type + handler](window.event);
		};
		node.attachEvent('on' + type, node[type + handler]);
		return true;
	}
	return false;
}
//移除事件监听
function removeEvent(node, type, handler) {
	if(!node) return false;
	if(node.removeEventListener) {
		node.removeEventListener(type, handler, false);
		return true;
	}
	else if(node.detachEvent) {
		node.detachEvent('on' + type, node[type + handler]);
		node.[type + handler] = null;
	}
	return false;
}