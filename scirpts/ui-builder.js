function buildWidgetDOM() {
  if (document.getElementById('webcam-control-container')) return null;

  const container = document.createElement('div');
  container.id = 'webcam-control-container';
  container.innerHTML = `
    <div id="webcam-control-header">
      <div id="webcam-control-title">🎭 Decoy Controller</div>
      <button id="webcam-control-toggle-btn">−</button>
    </div>
    <div id="webcam-control-body">
      <div id="webcam-control-preview-wrapper">
        <canvas id="webcam-control-preview" width="160" height="120"></canvas>
        <div id="webcam-control-preview-label">Live Output</div>
      </div>
      
      <div id="webcam-control-status">Status: Idle</div>

      <!-- Main Operational Control Panel -->
      <div id="webcam-main-controls">
        <div class="webcam-control-row">
          <button id="webcam-btn-freeze">Freeze Frame</button>
          <button id="webcam-btn-unfreeze" class="btn-success" disabled>Go Live</button>
        </div>

        <div class="webcam-control-row">
          <button id="webcam-btn-record">Record Loop</button>
          <button id="webcam-btn-play" disabled>Play Loop</button>
        </div>

        <div class="webcam-control-row">
          <label class="webcam-control-input-label">
            Record Duration (sec):
            <input type="number" id="webcam-num-duration" value="10" min="1" max="60" step="1">
          </label>
        </div>

        <div class="webcam-control-row webcam-control-checkbox-row">
          <label for="webcam-chk-ghost">
            <input type="checkbox" id="webcam-chk-ghost">
            Enable Ghost Align Helper
          </label>
        </div>

        <div class="webcam-control-row">
          <label class="webcam-control-input-label">
            Fade Duration (sec):
            <input type="number" id="webcam-num-fade" value="1.5" min="0.1" max="10" step="0.1">
          </label>
        </div>
      </div>

      <!-- Post-Recording Review Dialogue Modal -->
      <div id="webcam-control-modal" style="display: none;">
        <div id="webcam-modal-title">🎉 Loop Captured!</div>
        <div id="webcam-modal-desc">Review the preview loop above. How would you like to save it?</div>
        <div class="webcam-control-row">
          <button id="webcam-modal-btn-use" class="btn-success">Use Loop Now</button>
        </div>
        <div class="webcam-control-row">
          <button id="webcam-modal-btn-keep">Keep Saved (Stay Live)</button>
        </div>
        <div class="webcam-control-row">
          <button id="webcam-modal-btn-reshoot" class="btn-danger">Reshoot</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  return {
    container,
    header: document.getElementById('webcam-control-header'),
    body: document.getElementById('webcam-control-body'),
    toggleBtn: document.getElementById('webcam-control-toggle-btn'),
    
    mainControls: document.getElementById('webcam-main-controls'),
    actionModal: document.getElementById('webcam-control-modal'),
    
    btnFreeze: document.getElementById('webcam-btn-freeze'),
    btnUnfreeze: document.getElementById('webcam-btn-unfreeze'),
    btnRecord: document.getElementById('webcam-btn-record'),
    btnPlay: document.getElementById('webcam-btn-play'),
    
    chkGhost: document.getElementById('webcam-chk-ghost'),
    numFade: document.getElementById('webcam-num-fade'),
    numDuration: document.getElementById('webcam-num-duration'),
    statusLabel: document.getElementById('webcam-control-status'),
    previewLabel: document.getElementById('webcam-control-preview-label'),

    modalBtnUse: document.getElementById('webcam-modal-btn-use'),
    modalBtnKeep: document.getElementById('webcam-modal-btn-keep'),
    modalBtnReshoot: document.getElementById('webcam-modal-btn-reshoot')
  };
}
window.buildWidgetDOM = buildWidgetDOM;
