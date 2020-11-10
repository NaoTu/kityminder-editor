angular.module('kityminderEditor')

	.directive('noteEditor', ['valueTransfer', '$sce', function(valueTransfer, $sce) {
		return {
			restrict: 'A',
			templateUrl: 'ui/directive/noteEditor/noteEditor.html',
			scope: {
				minder: '='
			},
            replace: true,
			controller: function($scope) {
				var minder = $scope.minder;
				var isInteracting = false;
				var cmEditor;

                // 初始化预览所用的marked
				marked.setOptions({
                    gfm: true,
                    tables: true,
                    breaks: true,
                    pedantic: false,
                    sanitize: true,
                    smartLists: true,
                    smartypants: false
                });

				$scope.codemirrorLoaded =  function(_editor) {

					cmEditor = $scope.cmEditor = _editor;

					_editor.setSize('100%', '100%');
				};

				function updateNote() {
					var enabled = $scope.noteEnabled = minder.queryCommandState('note') != -1;
					var noteValue = minder.queryCommandValue('note') || '';

					if (enabled) {
						$scope.noteContent = noteValue;
					}

					isInteracting = true;
					$scope.$apply();
					isInteracting = false;
				}


				$scope.$watch('noteContent', function(content) {
					var enabled = minder.queryCommandState('note') != -1;

					if (content && enabled && !isInteracting) {
						minder.execCommand('note', content);
					}

					setTimeout(function() {
						cmEditor.refresh();
					});
				});


                var noteEditorOpen = function() {
                    return valueTransfer.noteEditorOpen;
                };

                // 监听面板状态变量的改变
                $scope.$watch(noteEditorOpen, function(newVal, oldVal) {
                    if (newVal) {
                        setTimeout(function() {
                            cmEditor.refresh();
                            cmEditor.focus();
                        });
                    }
                    $scope.noteEditorOpen = valueTransfer.noteEditorOpen;
                    $scope.noteEditorPreviewOpen = valueTransfer.noteEditorPreviewOpen;
                }, true);


                $scope.closeNoteEditor = function() {
                    valueTransfer.noteEditorOpen = false;
					editor.receiver.selectAll();
                };

                // 显示/隐藏预览
                $scope.toggleNoteEditorPreview = function() {
                    // 只有在之前未打开预览时才渲染，防止不必要资源浪费
                    if(!$scope.noteEditorPreviewOpen) {
                        var html = marked($scope.noteContent);
                        $scope.notePreview = $sce.trustAsHtml(html);    // AngularJS默认禁止渲染HTML，以防脚本攻击
                    }

                    $scope.noteEditorPreviewOpen = !$scope.noteEditorPreviewOpen;
                    valueTransfer.noteEditorPreviewOpen = !valueTransfer.noteEditorPreviewOpen;
                }

				minder.on('interactchange', updateNote);
			}
		}
    }]);